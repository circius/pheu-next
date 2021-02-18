const Icon = ({ children }) => {
  return (
    <span>
      {children}
      <style jsx>{`
        span {
          margin-top:'1em'
        }
      `}</style>
    </span>
  )
}

export default Icon