import { connect } from "react-redux"
import {
  createNotification,
  clearNotification,
} from "../reducers/notificationReducer"

const Notification = (props) => {
  const notification = props.notifications
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  }
  return (
    <div style={{ ...style, display: notification ? "block" : "none" }}>
      {notification ? notification.message : ""}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
  }
}

const mapDispatchToProps = { createNotification, clearNotification }

const ConnectedNotification = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)
export default ConnectedNotification
