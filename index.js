var promisex = window.promisex || {};

promisex.runInSequence = function(calls) {
  var deferred = $.Deferred();

  calls.reduce(function(previousCall, currentCall) {
    if (!previousCall) {
      previousCall = currentCall();
    }

    return previousCall.then(function() { return currentCall(); }, function() { deferred.reject(); });
  }, null)
  .then(
    function() { deferred.resolve();},
    function() { deferred.fail();}
  );

  return deferred.promise();
};
