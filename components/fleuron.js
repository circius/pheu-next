const Fleuron = () => {
  return (
    <div >
      <hr />
      <span>🙛</span>
      <style jsx>{`
      hr {
        width: 80%;
        position: relative;
        top: 6ch;
      }
      div {
        display: flex;
        flex-direction: column;
        align-self: center;
        width:80vw;
        margin: 4ch 0ch;
        max-width: 58ch;
      }
      span {
        font-size: 7ch;
        align-self: center;
        background-color: #141414;
        z-index: 1;
        padding: 0 .1ch;
        color: #aeaeae;
      }
    `}</style>
    </div>
  )
}

export default Fleuron