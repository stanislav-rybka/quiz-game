import ApiError from "../errors/ApiError.js";


// Exporting middleware function to handle incoming errors
export default function(err, req, res, next) {
  if ( err instanceof ApiError ) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Unhandled error.' });
}