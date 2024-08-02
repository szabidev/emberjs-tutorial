export const JsonSuffixHandler = {
  request(context, next) {
    const { request } = context;
    const updatedRequest = Object.assign({}, request, {
      url: request.url + '.json',
    });

    // The next function in the chain is called with the updated request object, it will make the request to the API with the updated URL.
    return next(updatedRequest);
  },
};
