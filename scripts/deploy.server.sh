docker build -t gcr.io/app-progeeks/progeeks-crm-server .
docker push gcr.io/app-progeeks/progeeks-crm-server
skaffold run -d