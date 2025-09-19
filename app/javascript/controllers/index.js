import { Application } from "@hotwired/stimulus"
import BioCounterController from "controllers/bio_counter_controller"
import AvatarUploadController from "controllers/avatar_upload_controller"
import UserCardController from "controllers/user_card_controller"

window.Stimulus = Application.start()
Stimulus.register("bio-counter", BioCounterController)
Stimulus.register("avatar-upload", AvatarUploadController)
Stimulus.register("user-card", UserCardController)
