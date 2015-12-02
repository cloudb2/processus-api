var processus = require('processus');

module.exports = {
  execute: execute,
  update: update,
  get: get,
  del: del
};

function execute(req, res) {
  var workflow = req.swagger.params.workflow.value;
  var response = {};

  processus.execute(workflow, function(err, workflow){
    if(err) {
      response.message = err.message;
      res.status(500);
    }
    response.workflow = workflow;
    res.json(response);
  });

}

function update(req, res) {
  var tasks = req.swagger.params.task.value;
  var uuid = req.swagger.params.uuid.value;
  var response = {};

  processus.updateWorkflow(uuid, tasks, function(err, workflow){
    if(err) {
      response.message = err.message;
      res.status(500);
    }
    response.workflow = workflow;
    res.json(response);
  });
}

function get(req, res) {
  var uuid = req.swagger.params.uuid.value;
  var rewind=0;
  if(req.swagger.params.rewind !== undefined){
    rewind = req.swagger.params.rewind.value;
  }
  var response = {};
  processus.getWorkflow(uuid, rewind, function(err, workflow){
    if(err) {
      response.message = err.message;
      res.status(500);
    }
    response.workflow = workflow;
    res.json(response);
  });
}

function del(req, res) {
  var uuid = req.swagger.params.uuid.value;
  var response = {};

  if(uuid === "all"){
    processus.deleteAll(function(err){
      if(err){
        response.message = err.message;
        res.status(500);
      }
      else {
        response.message = "all workflows deleted.";
      }
      res.json(response);
    });
  }
  else {
    processus.deleteWorkflow(uuid, function(err){
      if(err){
        response.message = err.message;
        res.status(500);
      }
      else {
        response.message = "workflow and associated history deleted.";
      }
      response.uuid = uuid;
      res.json(response);
    });
  }

}
