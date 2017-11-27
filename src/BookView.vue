<template>
  <div>
    <div class="wrapper">
      <h2>{{bookID}} - {{bookAuthor}}</h2>
      Of the <span class="reported">{{Math.floor(Math.random() * 1000)}}</span>
      students who reported,
      <span class="purchased">{{Math.floor(Math.random() * 100)}}%</span>
      purchased, <span class="worthwhile">{{Math.floor(Math.random() * 100)}}%</span>
      of whom said buying this textbook is worthwhile.
    </div>
    <div class="reviews wrapper">
      <li class="review" :key="review.id" v-for="review in reviews">
        {{review.name}} - {{review.text}}
      </li>
    </div>
  </div>
</template>

<script>
import lorem from "lorem-ipsum"
import randomName from "node-random-name"

const generateRandomReviews = numReviewsToGen => {
  const toReturn = []
  for (let i = 0; i < numReviewsToGen; i++) {
    toReturn.push({
      id: i,
      name: randomName({ seed: i }),
      text: lorem({ count: 3, units: "sentences" })
    })
  }
  return toReturn
}
export default {
  data() {
    return {
      bookAuthor: randomName(),
      reviews: generateRandomReviews(100)
    }
  },
  props: ["bookID"]
}
</script>

<style scoped>
.wrapper {
  margin: 0 10vw;
}

.reported {
  color: #c5cae9;
}

.review {
  border-bottom: 2px solid #bdbdbd;
  padding: 1vh 0;
}

.reviews {
  height: 50vh;
  margin-top: 10vh;
  overflow: scroll;
}

.purchased {
  color: #3f51b5;
}

.worthwhile {
  color: #303f9f;
}
</style>
