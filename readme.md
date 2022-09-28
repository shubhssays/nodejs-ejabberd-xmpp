1. I am using docker to run ejabberd.

docker run --name ejabberd -p 5222:5222 ejabberd/ecs

2. creating 2 users i.e. shubhs and admin

docker exec -it ejabberd bin/ejabberdctl register admin localhost pass@123

docker exec -it ejabberd bin/ejabberdctl register shubhs localhost pass@123