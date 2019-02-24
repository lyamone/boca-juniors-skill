const HelpHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
      const speakOutput = 'Con esta skill podras saber el proximo partido de Boca';
  
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    },
  };

  module.exports = HelpHandler;