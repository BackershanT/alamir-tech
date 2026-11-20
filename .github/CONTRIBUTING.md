# Contribution Guide & Git Workflow

Welcome to the **alamir-tech** project! To maintain high code quality, security, and smooth releases across all environments, follow this Git branching and deployment strategy.

---

## 🌳 Branch Architecture

Our repository uses **three permanent branches**:

| Branch | Environment | Purpose | Deployment Trigger |
|---|---|---|---|
| `dev` | **Development** | Main integration branch for all ongoing feature work | Automatic push/merge to `dev` |
| `beta` | **Staging / QA** | Pre-production testing, UAT, and regression validation | Automatic push/merge to `beta` |
| `master` | **Production** | Live production release environment | Push/merge with authorized approval |

---

## 🌿 Supporting Branches

All changes originate from temporary supporting branches created from specific parent branches:

1. **`feature/<feature-name>`**
   - Base branch: `dev`
   - Merge target: `dev`
   - Purpose: New features, UI components, enhancements.

2. **`fix/<bug-name>`**
   - Base branch: `dev`
   - Merge target: `dev`
   - Purpose: Normal bug fixes discovered during development.

3. **`hotfix/<issue-name>`**
   - Base branch: `master`
   - Merge target: `master`
   - Back-merge target: `beta` and `dev`
   - Purpose: Urgent critical production bugs that cannot wait for regular release cycles.

4. **`release/vX.Y.Z`** (Optional)
   - Base branch: `dev`
   - Merge target: `beta` (then into `master`)
   - Purpose: Final stabilization, version bump, and release candidate testing.

---

## 🔄 Development Lifecycle

```
[ feature/* or fix/* ]
         │
         ▼ (PR + CI check)
      [ dev ] ──────────────► Development Environment (dev.alamirtech.com)
         │
         ▼ (PR + QA approval)
     [ beta ] ──────────────► Staging / QA Environment (beta.alamirtech.com)
         │
         ▼ (PR + Production sign-off)
    [ master ] ─────────────► Production Environment (alamirtech.com)
```

### 1. Starting Work on a Feature
```bash
# Ensure local dev branch is up to date
git checkout dev
git pull origin dev

# Create your feature branch
git checkout -b feature/auth-login
```

### 2. Local Development & Verification
Before pushing, ensure local linting and type checks pass:
```bash
npm run lint
npm run build
```

### 3. Submitting a Pull Request to `dev`
```bash
git push -u origin feature/auth-login
```
Open a Pull Request on GitHub targeting `dev`. The automated PR validation workflow will run formatting, linting, and build checks.

### 4. Promoting to Staging (`beta`)
Once a milestone or sprint backlog is verified on `dev`:
1. Open a Pull Request from `dev` into `beta`.
2. Staging automated tests run.
3. QA / product team conducts acceptance testing on `beta`.

### 5. Promoting to Production (`master`)
1. Open a Pull Request from `beta` into `master`.
2. Ensure all CI checks pass.
3. Obtain authorized sign-off.
4. Tag the release:
```bash
git checkout master
git pull origin master
git tag -a v1.0.0 -m "Release v1.0.0: Initial production release"
git push origin v1.0.0
```

---

## 🚑 Hotfix Procedure

When an urgent production bug occurs:
1. Branch off `master`:
   ```bash
   git checkout master
   git pull origin master
   git checkout -b hotfix/payment-gateway-timeout
   ```
2. Implement the fix and verify locally (`npm run lint`, `npm run build`).
3. Open a Pull Request directly into `master`.
4. After approval and production deploy, **back-merge** into `beta` and `dev`:
   ```bash
   # Sync to beta
   git checkout beta
   git pull origin beta
   git merge master
   git push origin beta

   # Sync to dev
   git checkout dev
   git pull origin dev
   git merge beta
   git push origin dev
   ```

---

## 🔒 Security & Credential Rules

1. **NEVER** commit `.env`, `.env.local`, or any file containing API keys, private tokens, or database passwords.
2. Only commit safe templates (`.env.example`, `.env.*.example`).
3. Configure actual secrets in **GitHub Repository Settings → Environments** (`development`, `staging`, `production`).
4. Never expose Supabase `SERVICE_ROLE_KEY` to client-side code (`NEXT_PUBLIC_*`).
