## 📋 Pull Request Description

### Summary
<!-- Provide a clear and concise description of what this PR accomplishes. -->

### Changes Made
- <!-- Bullet point summary of code changes -->
- <!-- Bullet point summary of code changes -->

### Type of Change
- [ ] 🚀 New feature (`feature/*` -> `dev`)
- [ ] 🐛 Bug fix (`fix/*` -> `dev`)
- [ ] 🚑 Hotfix (`hotfix/*` -> `master` & back-merge)
- [ ] 🧪 Staging promotion (`dev` -> `beta`)
- [ ] 🏆 Production release (`beta` -> `master`)
- [ ] 🔨 Refactoring / Tooling / CI

---

## 🔗 Related Issues
<!-- Link tickets or issues, e.g. Closes #123, Fixes #456 -->
- Issue: #

---

## 🧪 Testing Performed

### Automated Tests
- [ ] Lint passed (`npm run lint`)
- [ ] Build passed (`npm run build`)
- [ ] Unit / Integration tests passed (`npm test`)

### Manual Verification
<!-- Describe manual tests conducted locally or on deployed preview -->
- [ ] Verified locally in browser (desktop & mobile responsive)
- [ ] API endpoints verified with expected status codes
- [ ] Edge cases tested

### Screenshots / Videos (if applicable)
<!-- Attach screenshots or UI diffs -->

---

## 🗄️ Database & Migration Impact

- [ ] **No database schema changes in this PR**
- [ ] Contains new migrations:
  - [ ] Migration is backward-compatible (safe to run before or after code deploy)
  - [ ] No destructive `DROP TABLE`, `DROP COLUMN`, or irreversible data operations
  - [ ] Supabase Row Level Security (RLS) policies defined and tested
  - [ ] Rollback strategy verified and documented

---

## ⚠️ Breaking Changes & Environment Variables

- [ ] **No breaking changes**
- [ ] **Requires environment variable updates**:
  - [ ] Updated `.env.example`
  - [ ] Updated `.env.development.example` / `.env.staging.example` / `.env.production.example`
  - [ ] Added secrets to GitHub Actions Environment settings (dev / staging / prod)

---

## 🚀 Deployment Considerations
<!-- Any special steps needed during or after deployment? (e.g. database seed, webhook updates) -->

---

## 🛡️ Pre-Merge Checklist
- [ ] Code follows project style guidelines and naming conventions
- [ ] No secrets, API keys, passwords or tokens committed
- [ ] Pull request branch adheres to branch workflow:
  - `feature/*` targeting `dev`
  - `dev` targeting `beta`
  - `beta` targeting `master`
  - `hotfix/*` targeting `master` (with plan to sync `beta` and `dev`)
- [ ] Self-review conducted
