#@echo off

docker build -t gcr.io/app-progeeks/progeeks-crm-db ./
docker push gcr.io/app-progeeks/db
cd progeeks_crm_db/ || echo "Directory not found"
cd kubernetes-manifests/ || echo "Directory not found"

skaffold apply -f deployment.yaml -f service.yaml

cmd /k