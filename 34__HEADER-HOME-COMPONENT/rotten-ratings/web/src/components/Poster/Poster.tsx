interface Props {
  alt: string
  heading?: string
  src: string
  size?: 'small' | 'medium' | 'large'
  subheading?: string
}

const Poster = ({
  alt,
  heading = '',
  size = 'medium',
  src,
  subheading = '',
}: Props) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className={`mb-3 h-60 w-40 rounded-2xl object-cover drop-shadow-poster
          ${size === 'small' && 'h-60 w-40'}
          ${size === 'medium' && 'h-[310px] w-[224px]'}
          ${size === 'large' && 'h-[460px] w-[300px]'}`}
      />
      {heading && (
        <h3 className="pl-5 text-lg font-bold leading-none">{heading}</h3>
      )}
      {subheading && (
        <p className="pl-5 text-base leading-none">{subheading}</p>
      )}
    </div>
  )
}

export { Poster, Props as PosterProps }
