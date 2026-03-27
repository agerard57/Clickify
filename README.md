<img width="1855" height="913" alt="image" src="https://github.com/user-attachments/assets/53662493-63ca-479a-803d-5809e9c37de6" />

# Clickify E-commerce Platform — Technical Documentation

## 1. Project Overview
Clickify is a SaaS platform that enables businesses to create personalized e-commerce websites quickly through a subscription service. The platform offers 3 main components:


# Clickify E-Commerce Platform — Technical Overview

## Project Overview

Clickify is a SaaS platform for the creation and management of personalized e-commerce websites. It is composed of three primary components:

- **Main Site (clickify-main):** Landing page and subscription portal.
<img width="841" height="412" alt="image" src="https://github.com/user-attachments/assets/325544ca-5708-42ec-9f53-689a380b5e4f" />

- **Generated Sites (clickify-generated):** Customer-facing e-commerce sites generated per subscribed company.
 <img width="841" height="412" alt="image" src="https://github.com/user-attachments/assets/5f98fef2-2e88-48d5-bf30-c123692d3603" />
 
- **Back-Office (clickify-back-office):** Administration interface for managing users, subscriptions, catalogs, and site configurations.
<img width="841" height="412" alt="image" src="https://github.com/user-attachments/assets/f4bcf2e1-d511-4ec8-982e-5a7a48dc0918" />


### Features:
- **E-Commerce Customization:** Product filtering, settings customization, dashboards.
- **User Account Management:** Account creation, profile management, subscription monitoring.
- **Public Website (Site Vitrine):** Multi-language support, company descriptions, and subscription details.
- **Admin and Customer Dashboards:** Data visualizations with Chart.js, Mapbox.

---

## Architecture and Infrastructure

### 1. **General Architecture**
Clickify uses a hybrid architecture with both AWS cloud services and self-hosted components.

- **Self-hosted Servers:**
  - **GitLab**: Used for CI/CD pipelines and repository hosting.
  - **Zammad**: Incident and ticket management.
  - **Trilium**: Company knowledge base.
  - **Passbolt**: Secure credential storage.

- **AWS Services:**
  - **Amplify**: Frontend and back-office deployment.
  - **CodeCommit & ECR**: Code and Docker image repositories.
  - **Lambda**: Serverless backend functions.
  - **API Gateway**: API routing.
  - **DynamoDB**: NoSQL data store.
  - **S3**: Static asset and configuration file storage.
  - **Elastic Container Service (ECS)**: Container orchestration for generated sites.

---

### 2. **Component Overview**

#### 2.1 **Main Site (clickify-main)**
- **Frontend**: React (TypeScript) for UI components.
- **Backend**: AWS Lambda functions, accessed via API Gateway.
- **Database**: Amazon DocumentDB for subscription and company data.

#### 2.2 **Generated Sites (clickify-generated)**
- **Frontend & Backend**: React (TypeScript) for frontend; Node.js + Express for backend.
- **Data Storage**: 
  - Amazon S3 for media and file storage.
  - Amazon DynamoDB for structured data.
- **Subdomains**: Dynamic assignment via AWS Route 53.

#### 2.3 **Back-Office (clickify-back-office)**
- **Frontend**: React (TypeScript), deployed via AWS Amplify.
- **Backend**: AWS AppSync (GraphQL), AWS Lambda, API Gateway.
- **Data Storage**: DynamoDB, S3.
- **Functionalities**: User management, site management, catalog management, dashboard metrics.

---

## Technology Stack

| Layer               | Technology                                                      |
|---------------------|------------------------------------------------------------------|
| **Frontend Main**    | React (TypeScript)                                               |
| **Frontend Generated**| React (TypeScript)                                              |
| **Backend**          | Node.js with Express framework                                   |
| **Database**         | Amazon DynamoDB (NoSQL), DocumentDB (MongoDB-compatible)         |
| **Storage**          | Amazon S3                                                        |
| **API Gateway**      | AWS API Gateway (REST API endpoints)                             |
| **Serverless Logic** | AWS Lambda functions                                            |
| **Code Hosting**     | GitLab (self-hosted on Docker)                                   |
| **Deployments**      | AWS Amplify (Frontend), ECS (Containers)                        |

---

## Development and Deployment Process

### 1. **CI/CD:**
- GitLab CI/CD pipelines automate build, test, and deployment.
- AWS Amplify handles automatic frontend deployment.

### 2. **Testing:**
- **Unit Tests:** Jest for frontend and backend components.
- **Integration Tests:** Cypress for validating API and database interactions.
- **Automated Testing:** All tests integrated into GitLab pipeline before code merges.

### 3. **Code Review:**
- Peer-reviewed pull requests ensure code quality and error detection.

### 4. **Incident Management:**
- GitLab and Zammad for tracking and resolving incidents and issues.

---

## Security Measures

### 1. **Encryption:**
- Data encryption at rest (S3, DocumentDB, DynamoDB) and in transit (HTTPS).

### 2. **Authentication & Access Control:**
- SSH key-based authentication, 2FA for GitLab.
- JWT tokens for secure API access.

### 3. **Penetration Testing & Best Practices:**
- Regular penetration testing with OWASP ZAP and Kali Linux.
- Implementation of OWASP security practices.

### 4. **Credential Management:**
- Credentials managed using Passbolt for secure storage.

---

## Data Flow Summary

1. **User Registration**: A user subscribes on the Main Site, triggering a Lambda function that creates an ECS container and assigns a subdomain.
2. **Back-Office Management**: Admins use the Back-Office to manage users, products, and configurations via APIs.
3. **Customer Interaction**: Customers browse the generated e-commerce site and place orders, which are processed by the business operator.

---

## Monitoring and Performance

- **AWS CloudWatch** for real-time system monitoring.
- **Performance Testing** conducted to evaluate system scalability.

---

## Versioning & Documentation

- Documentation is versioned and tracked using the format `[AuthorInitials]_[DocumentType]_[Version].ext` (e.g., `AG_PAQ_v1.0.docx`).
- Documentation includes architectural designs, specification dossiers, and user manuals.

**Last Updated**: 27/03/2026  
**Current Version**: 014 (29/08/2024)  
**Project Manager**: Alexandre GERARD

---

## References

- [GitLab Docker Installation Guide](https://docs.gitlab.com/ee/install/docker.html)
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [Amazon DocumentDB Documentation](https://docs.aws.amazon.com/documentdb/latest/developerguide/what-is.html)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [React Documentation](https://react.dev)
- [Node.js Documentation](https://nodejs.org/en/docs)

---

## Summary

Clickify is a SaaS platform designed to create and manage personalized e-commerce websites. It utilizes a microservices architecture with AWS cloud services for scalability, security, and flexibility. The platform integrates serverless backend functions with containerized frontend applications, ensuring efficient deployment and management. All system components are connected via secure APIs, with automated testing and CI/CD pipelines facilitating development processes.
