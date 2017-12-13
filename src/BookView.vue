<template>
  <div>
    <div class="overview">
      <div class="info">
        <div class="book-info">
          <h3>{{name}} by {{author}}</h3>
          <hr />
          <div class="score-row"><h2>TRE Score:</h2><span class="score" v-bind:style="scoreStyle">{{score}}</span></div>
        </div>
        <div class="misc-info">
          <div>{{university}}</div>
          <div>{{course}}</div>
          <div>{{professor}}</div>
        </div>
      </div>
      <div class="recommendation">
        Based on this book's TRE score, you <u>{{score > 49 ? 'SHOULD' : 'SHOULD NOT'}}</u> buy this book.
      </div>
    </div>
    <hr />
    <div class="stats">
      <div>In depth Stats</div>
      <div>Necessary for Classwork: <b>{{classwork ? 'Yes' : 'No'}}</b></div>
      <div>Required Reading Material: <b>{{required ? 'Yes' : 'No'}}</b></div>
      <div>Necessary for Test Prep: <b>{{test ? 'Yes' : 'No'}}</b></div>
    </div>
    <hr />
    <div class="ratings">
      <el-button class="rate-button" type="primary" plain @click="dialogVisible = true">Rate this Book</el-button>
      <h2>Student Ratings</h2>
      <table class="ratings-wrapper">
        
        <tr class="rating" :key="review.id" v-for="review in reviews">
          <td style="font-size: 1.2em">{{review.name}}</td>
          <td style="height: 9em; display: flex; flex-direction: column; justify-content: space-around; font-size: 0.9em; width: 20em;">
            <div>Necessary for classwork: <b>{{review.classwork ? 'Yes' : 'No'}}</b></div>
            <div>Required reading material: <b>{{review.required ? 'Yes' : 'No'}}</b></div>
            <div>Necessary for test prep: <b>{{review.test ? 'Yes' : 'No'}}</b></div>
          </td>
          <td>{{review.comment}}</td>
        </tr>
      </table>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="450px">
      <el-form :model="reviewForm">
        <el-form-item label="Your Name">
          <el-input v-model="reviewForm.name" />
        </el-form-item>
        <el-form-item label="Necessary for Class Work">
          <el-checkbox v-model="reviewForm.classwork" />
        </el-form-item>
        <el-form-item label="Required Reading Material">
          <el-checkbox v-model="reviewForm.required" />
        </el-form-item>
        <el-form-item label="Necessary For Test Prep">
          <el-checkbox v-model="reviewForm.test" />
        </el-form-item>
        <el-form-item label="Comment">
          <el-input v-model="reviewForm.comment" type="textarea"/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="discardReview">Discard</el-button>
        <el-button type="primary" :disabled="reviewFormSubmitDisabled" @click="submitReview">Post Rating</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import randomName from "node-random-name"
import lorem from "lorem-ipsum"

export default {
  computed: {
    scoreStyle() {
      return `background-color: ${this.score < 50
        ? "lightcoral"
        : this.score < 75 ? "yellow" : "lightgreen"}`
    },
    reviewFormSubmitDisabled() {
      return this.reviewForm.name.length === 0
    },
    reviews() {
      const fakeReviews = []
      for (let i = 0; i < Math.floor(Math.random() * 50); i++) {
        fakeReviews.push({
          id: i,
          name: randomName(),
          comment: lorem({ count: 3, units: "sentences" }),
          required: Math.random() > 0.5 ? true : false,
          classwork: Math.random() > 0.5 ? true : false,
          test: Math.random() > 0.5 ? true : false
        })
      }
      return this.realReviews.concat(fakeReviews)
    }
  },
  data() {
    return {
      required: Math.random() > 0.5 ? true : false,
      classwork: Math.random() > 0.5 ? true : false,
      test: Math.random() > 0.5 ? true : false,
      author: faker.name.findName(),
      score: Math.floor(Math.random() * 100),
      dialogVisible: false,
      reviewForm: {
        classwork: false,
        required: false,
        test: false,
        name: "",
        comment: ""
      },
      realReviews: []
    }
  },
  methods: {
    discardReview() {
      this.dialogVisible = false
      this.reviewForm = {
        classwork: false,
        required: false,
        test: false,
        name: "",
        comment: ""
      }
    },
    submitReview() {
      const { classwork, required, test, name, comment } = this.reviewForm
      this.realReviews.unshift({ classwork, required, test, name, comment })
      this.reviewForm = {
        classwork: false,
        required: false,
        test: false,
        name: "",
        comment: ""
      }
      this.dialogVisible = false
    }
  },
  props: ["name", "university", "course", "professor"]
}
</script>


<style scoped>
td {
  padding: 1em;
}

.rating {
  height: 9em;
}

.rating:nth-child(even) {
  background-color: #e5e5e5;
}

.stats {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.2em;
  height: 10em;
}

.info {
  display: flex;
  flex-direction: row;
}

.book-info h3 {
  font-size: 1.5em;
}

.book-info h2 {
  font-weight: normal;
}

.book-info {
  width: 50%;
}

.misc-info {
  display: flex;
  font-size: 1.5em;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5%;
  width: 45%;
}

.score-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 0;
}

.score {
  border: 2px solid black;
  font-size: 4em;
  text-align: center;
  width: 1.2em;
}

.recommendation {
  font-size: 1.5em;
  text-align: center;
}

.rate-button {
  color: black;
  margin: 1em 0;
  font-size: 1.5em;
  width: 25%;
}

.comment-modal {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
