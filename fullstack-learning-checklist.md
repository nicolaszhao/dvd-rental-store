# 全栈学习清单（偏前端开发者路线）

> 已掌握：React, Next.js, PostgreSQL, Prisma
> 预估总时长：集中学习约 2-3 个月（第七阶段为长期积累）

## 第一阶段：安全基石（1-2 周）

- [ ] **Zod** — 前后端通用的数据校验库，和 Prisma / tRPC 无缝配合
- [ ] **认证方案 Auth.js (NextAuth)** — OAuth 登录、Session 管理、JWT
- [ ] **RBAC 权限模型** — 角色、权限设计，中间件鉴权
- [ ] **安全基础** — CORS、CSRF、XSS 防护、环境变量管理

## 第二阶段：API 能力（1-2 周）

- [ ] **tRPC** — 端到端类型安全 API，告别手写接口定义
- [ ] **REST API 设计** — 状态码规范、资源命名、分页、错误格式
- [ ] **Server Actions** — Next.js 服务端操作
- [ ] **Webhook 处理** — 接收第三方回调（支付通知、GitHub 事件等）

## 第三阶段：部署上线（1-2 周）

- [ ] **Docker** — Dockerfile 编写、docker-compose 多服务编排
- [ ] **Vercel / Railway** — 至少熟练一个平台的完整部署流程
- [ ] **GitHub Actions** — 自动化测试 + 自动部署 CI/CD 流水线
- [ ] **域名 + HTTPS + DNS 基础** — 买域名、配证书、解析

## 第四阶段：缓存 & 性能（1-2 周）

- [ ] **Redis 基础** — 缓存、Session 存储、排行榜、限流
- [ ] **HTTP 缓存** — Cache-Control、ETag、ISR/SSG 策略
- [ ] **数据库优化** — 索引原理、N+1 问题、`explain analyze`
- [ ] **Prisma 进阶** — 事务 `$transaction`、`$queryRaw`、连接池

## 第五阶段：文件 & 第三方服务（1 周）

- [ ] **S3 / Cloudflare R2** — 文件上传、图片处理、签名 URL
- [ ] **Resend** — 事务邮件发送（验证码、通知等）
- [ ] **Stripe / 微信支付** — 按目标市场选一个
- [ ] **BullMQ** — 基于 Redis 的任务队列，处理异步任务

## 第六阶段：可观测性（1 周）

- [ ] **Sentry** — 错误监控、性能追踪
- [ ] **Pino** — 结构化日志（JSON 格式，方便搜索分析）
- [ ] **Uptime 监控** — BetterStack / UptimeRobot

## 第七阶段：系统设计思维（持续）

- [ ] **数据库备份与恢复策略**
- [ ] **限流 Rate Limiting** — 防暴力请求
- [ ] **WebSocket 基础** — 实时通知、聊天场景
- [ ] **基本的 Linux 命令** — ssh、systemctl、日志查看
- [ ] **微服务 vs 单体** — 了解边界，初期坚持单体

---

## 练手项目建议

| 阶段 | 练手项目 |
|------|----------|
| 1-2  | 带登录注册 + 权限的 Todo App API |
| 3    | 把上面的项目 Docker 化并部署上线 |
| 4    | 给项目加 Redis 缓存，压测对比性能 |
| 5    | 加文件上传头像 + 邮件验证功能 |
| 6    | 接入 Sentry，故意制造错误看监控效果 |
