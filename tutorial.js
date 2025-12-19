/*

DevOps -> 

Ship readable code through GitHub

Build Stage -> the code needs to be compiled ot transpiled, dependencies installed, bundled or packaged(in docker) and check for linting or security mistakes. 

We build docker images, run containers and build them every time we make a commit,

then we do testing. Automated test run as part of CI pipeline. 

Kubernetes has rolling deployment. 

CI/CD -> Continuous Integration & Continuous Deployment. 

yaml file -> This is where the automation code is inside our repo ao it is easy to audit and reuse. It is simple to use. 

yaml has some special keywords -> 
    name - Used to define workflows or job title
    on - defined triggers such as push, pr or schedules
    jobs - define jobs, their OS and steps. jobs are a a group of steps that run together
    steps - sequential commands and actions. They are inside jobs and are the real instructions that sre to be executed one after another. 
    run - shell commands to execute
    uses - use prebuilt actions
    with - pass parameters to actions
    env - set environment variables
    needs - make one job depend on another



*/ 

console.log('test')