# k8s-stages

## Pod
### The smallest of kubernetes
#### *Pros:* It's sample and shortly.
#### *Contr:* If drop, you must setup manually.

<hr>

## ReplicaSet
### setup and control Pods.
#### *Pros:* If a Pod drop, the Replicaset immediately setup another with same configuration.
#### *Contr:* If you change the stage, the Replicaset don't clear the old pods to setup new pods.

<hr>

## Deployment
### Setup and control the Replicaset.
#### *Pros:* If you change the stage, the Deployment manage the Replicaset to drop old pods and setup new pods.
#### *Contr:* -

<hr>

## Service
### Manage the redirecting access to Pod group selected.
