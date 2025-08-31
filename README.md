# RetailTech Solutions - Full Stack Retail Application on Azure VM

## Student
**Name:** Arinjay Jha 
**Course:** Cloud Computing - Azure VM Deployment  
**Assignment:** Deploying a Full-Stack Retail Application on Azure Virtual Machine  

---

## 📌 Approach

### 1. Azure VM Setup
- Created an **Ubuntu Server 20.04 LTS** VM on Azure (size: B1ms).  
- Configured **Network Security Group (NSG)** to allow ports:
  - 22 (SSH)
  - 80 (HTTP)
  - 443 (HTTPS)
- Secured VM with **SSH key authentication** (password login disabled).  
- Installed required packages:
  - Node.js + npm
  - Nginx
  - PM2
  - SQLite (via Sequelize ORM)

---

### 2. Backend (Node.js + Express)
- Created a **REST API** with routes:
  - `/api/customers`
  - `/api/products`
  - `/api/sales`
- Used **Sequelize + SQLite** for persistence.  
- Managed with **PM2** to ensure backend runs continuously.  
- Verified with `curl http://localhost:5000/api/customers`.  

---

### 3. Frontend (React + Vite)
- Built frontend with **React (Vite)**.  
- Configured API calls to `/api/...`.  
- Built static files with `npm run build`.  
- Served static files via **Nginx** (`/var/www/html`).  
- Configured **Nginx reverse proxy** to forward `/api` requests to backend on port 5000.  

---

### 4. CI/CD (GitHub Actions)
- Created a repo on GitHub containing `backend/` and `frontend/`.  
- Added workflow file: `.github/workflows/deploy_azure_vm.yml`.  
- Configured **GitHub Secrets**:
  - `AZURE_VM_IP`
  - `AZURE_VM_USER`
  - `AZURE_VM_SSH_KEY`
- Workflow automatically:
  - Builds frontend
  - SSHs into VM
  - Updates backend + frontend
  - Restarts services
- Verified by editing `Home.jsx` → pushed to GitHub → live changes appeared on `http://<VM_PUBLIC_IP>`.

---

### 5. Monitoring & Error Handling
- Created **`monitor_app.sh`** script:
  - Runs every 5 mins
  - Checks API health (`/api/customers`)
  - Logs results into `health_check.log`
  - Restarts backend with PM2 if API fails
- Configured **Azure Monitor**:
  - Metrics: CPU %, Memory, Disk, Network
  - Alerts for high CPU usage

---

## ⚡ Challenges & Solutions
- **SSH authentication issues**  
  → Solved by using SSH key pairs (`.pem` for PowerShell, converted `.ppk` for WinSCP).  

- **CORS errors in React API calls**  
  → Solved using **Nginx reverse proxy** (`/api` → backend).  

- **Keeping backend alive**  
  → Solved by running with **PM2** and auto-healing script `monitor_app.sh`.  

- **Deployment updates manually**  
  → Solved with **GitHub Actions CI/CD** pipeline.  

---

## 🔍 Observations
- A **B1ms Azure VM** handles small workloads well (backend + React build).  
- Nginx reverse proxy improves **performance and security**.  
- GitHub Actions CI/CD ensures **zero-downtime deployments**.  
- Health check script + Azure Monitor provides **reliability**.  

---

## 📂 Submission Deliverables
- **setup_azure_vm.sh** → Script for initial VM setup  
- **app.js** → Node.js backend entry file  
- **nginx.conf** → Nginx configuration file  
- **deploy_azure_vm.yml** → GitHub Actions workflow  
- **monitor_app.sh** → Health check script  
- **README.md** → Documentation (this file)  
- **screenshots/** → Evidence of setup, deployment, monitoring  
- **logs/** → Deployment logs + health check logs  

---

## 📸 Screenshots (Required)
- Azure VM details (Portal)  
- NSG rules (Ports 22, 80, 443)  
- Node.js + npm version check  
- Backend running (`pm2 list`, `curl`)  
- API response in browser/Postman  
- React frontend on VM public IP  
- Network tab showing API calls  
- GitHub Actions workflow success  
- Azure Monitor metrics dashboard  
- Health check log entries  
- `ps aux` showing monitor script running  

---

## 📑 Logs (Required)
- `deploy.log` → From GitHub Actions run  
- `health_check.log` → From monitoring script  

---

✅ This completes the **Full Stack Retail Application Deployment on Azure VM** assignment.  

