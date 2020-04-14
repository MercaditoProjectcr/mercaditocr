class ErrorHandle {
  getErrors(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({
      error: true,
      message: err,
    });
  }
}

export default ErrorHandle;
