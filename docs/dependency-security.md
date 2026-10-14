# 相依套件安全狀態

2026-10-14 檢查結果：完整 `npm audit` 從 21 個項目降至 12 個 high，critical 和 moderate 均為 0。剩餘項目由兩個尚無上游修補版的套件及其引用鏈產生，不能視為零漏洞。

Nuxt 已升級至 4.6.1，Nuxt Content 升級至 3.16.2；lockfile 中的 Vue、DevTools、devalue、shell-quote、PostCSS selector parser 與 source-map-js 也已更新至不在原漏洞影響範圍內的版本。DevTools 3.4.3 已移除 simple-git 相依，shell-quote 更新至 1.12.0，原本三個 critical 項目均已清除。

## 尚未修補的依賴

| 套件       | 目前版本 | 上游公告                                                                                                           | 本專案的引用來源                                  |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| braces     | 3.0.3    | [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)：深層巢狀 pattern 可造成堆疊耗盡          | Nuxt Content → micromatch，以及 globby／fast-glob |
| node-forge | 1.4.0    | [GHSA-86w9-cpqp-85rv](https://github.com/advisories/GHSA-86w9-cpqp-85rv)：RSA PKCS#1 v1.5 簽章驗證可能接受無效結構 | Nuxt → Nitro → listhen                            |

檢查當日，兩份公告的 patched versions 均為 None，npm registry 的最新版也仍是上述版本。`npm audit fix --force` 建議的 Nuxt Content 2／較舊 Nuxt 版本會改變目前架構，無法當成已驗證的修復方案。

目前 Content 來源是儲存庫內的 `blog/*.md`，glob pattern 由專案配置決定。不要將外部輸入直接當成 glob pattern。listhen 的 node-forge 用於本機 HTTPS 憑證處理；開發與預覽伺服器應維持本機用途。

專案的 Pages 部署使用 `npm run generate` 產生的 `.output/public` 靜態檔案，並不在 Pages 執行這些 Node.js 套件。建置與本機開發環境仍保留上述依賴，需要持續追蹤上游修補；若改成 Nuxt 伺服器部署，應重新評估完整執行環境。

## 升級限制

- Node.js 最低版本範圍已對齊 Nuxt 4.6.1：`^22.22.3 || ^24.15.0 || >=26.0.0`。`.nvmrc` 的 Node 24.19.0 符合要求。
- `@types/node` 維持 Node 24 系列，已更新至 24.19.2，與專案使用的 Node 主版本一致。
- TypeScript 維持 6.0.3。現有 vue-tsc 依賴 JavaScript compiler API；[TypeScript 7.0 官方說明](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)確認 7.0 尚未提供該 API。
- esbuild 安裝腳本只核准目前 lockfile 使用的 0.28.2。

## 複查

```sh
npm ci
npm run typecheck
npm run build
npm run generate
npm audit
npm outdated
```

`npm audit` 目前仍會以非零狀態結束；沒有忽略公告或調低掃描門檻。`npm outdated` 會列出 `@types/node` 與 TypeScript 的較新主版本，原因如上。
