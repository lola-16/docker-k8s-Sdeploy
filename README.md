# Docker-K8s Simple Node.js Backend

This project contains a simple Node.js backend that is containerized using Docker and can be deployed to a Kubernetes cluster. The backend is designed to handle API requests, and this setup will later be complemented with a React frontend.

## Project Structure

The project consists of the following main components:

- **Node.js Backend**: A simple Node.js server providing an API to handle requests.
- **Docker**: Dockerfile and Docker Compose configuration to containerize the application.
- **Kubernetes**: Kubernetes configuration (`kube.yml`) for deploying the application to a Kubernetes cluster.

## Technologies Used
- **Backend**: Node.js
- **Containerization**: Docker
- **Orchestration**: Kubernetes

## Prerequisites

Before running this project, you need to have the following installed:

- **Docker**: For containerizing the backend application.
- **Node.js**: For running the backend service.
- **npm**: For managing Node.js dependencies.
- **kubectl**: For managing Kubernetes clusters (if deploying to Kubernetes).

## Setup and Installation

### 1. Clone the repository:

```bash
git clone https://github.com/lola-16/docker-k8s-Sdeploy.git
cd docker-k8s-Sdeploy
