const Poster = ({ alt, src }) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="h-60 w-40 rounded-2xl object-cover drop-shadow-poster"
      />
    </div>
  )
}

export { Poster }
