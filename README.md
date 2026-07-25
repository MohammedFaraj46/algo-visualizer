# AlgoVisualizer

An interactive visualizer for common algorithms and data structures. Built to make it easier to understand how these algorithms work by watching them run step by step.

## Algorithms

**Sorting**
- Selection Sort
- Bubble Sort
- Merge Sort
- Quick Sort

**Searching**
- Linear Search
- Binary Search

**Data Structures**
- Binary Search Tree

**Graph Algorithms**
- Depth First Search (DFS)
- Breadth First Search (BFS)

## Tech Stack

- React 19
- React Router 7.15.1 (SSR)
- TypeScript 5
- Tailwind CSS v4
- Motion 12
- React Flow 12

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Run locally

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Docker

Build and run the app in a container:

```bash
docker build -t algo-visualizer .
docker run -p 3000:3000 algo-visualizer
```

The app will be available at `http://localhost:3000`.

## Kubernetes

Apply the manifests to your cluster:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

## CI/CD

A GitHub Actions workflow runs on every push to `main`. It installs dependencies, builds the app, and builds the Docker image to verify nothing is broken.