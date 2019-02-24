const getNextMatch = require('../services/getNextMatch.service');

const NextMatchRequestHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'nextMatch';
    },
    async handle(handlerInput) {
        
        const responseBuilder = handlerInput.responseBuilder;
        const match = await getNextMatch();
        const speakOutput = 'Boca jugara ' + match.date + ' contra ' + match.team + match.stadium;
        
        return responseBuilder
        .speak(speakOutput)
        .getResponse();
    },
  };

module.exports = NextMatchRequestHandler;
