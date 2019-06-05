#### Clicking away

Notice that if you click away from the confirmation popup, it closes but no events are
triggered.

There _is_ an event to trap the appearance and disappearance of the popup confirmation, but it is
not trivial to implement logic supporting this event as a cancellation. This is because the
event is triggered even if the user used a confirmation button to close the popup.
