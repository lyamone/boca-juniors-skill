
const LaunchRequestHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {

      const responseBuilder = handlerInput.responseBuilder;
      var speakOutput = 'Bienvenido a la skill de Boca Juniors.';

      return responseBuilder
        .speak(speakOutput)
        .getResponse();
    },
  };

module.exports = LaunchRequestHandler;
