const Alexa = require('ask-sdk');

// Generic Handlers
const LaunchRequestHandler = require('./handlers/launch.handler');
const ErrorHandler = require('./handlers/error.handler');
const HelpHandler = require('./handlers/help.handler');
const SessionEndedRequestHandler = require('./handlers/session-ended.handler');
const CancelAndStopHandler = require('./handlers/cancel-stop.handler');

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelpHandler,
    CancelAndStopHandler,
    SessionEndedRequestHandler,
  )
  .addErrorHandlers(ErrorHandler)
  .withTableName('bj-matches')
  .withAutoCreateTable(true)
  .lambda();
