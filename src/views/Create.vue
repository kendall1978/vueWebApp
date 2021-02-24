<template>
  <b-container class="mt-4">
    <b-row>
      <b-col>
        <b-form>
          <b-form-input placeholder="Title" v-model="title"> </b-form-input>
          <b-form-textarea
            placeholder="Content"
            id="textarea"
            rows="5"
            v-model="content"
          >
          </b-form-textarea>
          <b-form-input placeholder="Date" v-model="date"></b-form-input>
          <div>
            <b-button @click="click1">choose a photo</b-button>
            <input
              type="file"
              ref="input1"
              style="display: none"
              @change="onUpload"
              accept="image/*"
            />
          </div>
          <b-button type="button" v-on:click="create">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
export default {
  name: "create",
  data() {
    return {
      file: null,
      title: "",
      content: "",
      imageUrl: "",
      date: "",
    };
  },
  methods: {
    create() {
      firebase
        .firestore()
        .collection("blog-posts")
        .add({
          title: this.title,
          content: this.content,
          imageUrl: this.imageUrl,
          date: this.date,
        })
        .then((response) => {
          console.log(response.id);
          this.$store.dispatch("updatePostsAction", response.id);
          this.$router.replace({ path: "/admin" });
        })
        .catch((error) => {
          console.log("Error adding post: ", error);
        });
    },
    click1() {
      this.$refs.input1.click();
    },
    onUpload(event) {
      this.uploadValue = 0;
      this.imageData = event.target.files[0];
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.imageUrl = url;
            console.log(this.imageUrl);
          });
        }
      );
    },
  },
};
</script>

<style>
button {
  color: white;
}
</style>