interface WatchLaterProps {
  size?: number
}

const WatchLater = ({ size = 24 }: WatchLaterProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Watch Later Icon</title>
      <path d="M10.834 8.4243V13.2425H14.0461V11.6364H12.4401V8.4243H10.834Z" />
      <path d="M12.4415 3.60608C14.63 3.60608 16.6501 4.48059 18.1341 5.9654L19.6963 4.40911V9.22733H14.8597L16.9951 7.10009C15.8077 5.91159 14.1923 5.21215 12.4415 5.21215C8.8858 5.21215 5.99274 8.09425 5.99274 11.6364C5.99274 15.1786 8.8858 18.0607 12.4415 18.0607V19.6668C7.99669 19.6668 4.38056 16.0652 4.38056 11.6364C4.38056 7.2077 7.99669 3.60608 12.4415 3.60608Z" />
    </svg>
  )
}

export { WatchLater }
