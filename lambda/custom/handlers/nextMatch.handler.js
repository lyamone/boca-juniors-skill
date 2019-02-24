const getNextMatch = require('../services/getNextMatch.service');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'nextMatch';
    },
    async handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;
        const match = await getNextMatch();

      return responseBuilder
        .speak(speakOutput)
        .getResponse();
    },
  };

module.exports = LaunchRequestHandler;
