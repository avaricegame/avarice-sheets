import React from "react"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import Loader from "./Loader"

function Error() {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      history.push("/")
      window.location.reload()
    }, 2000)
  }, [])

  return <Loader />
}

export default Error
