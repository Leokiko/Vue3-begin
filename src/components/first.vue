<template>
    <div>
        <span id="L">
            <span class="height6">
                <span id="blue">4x6</span>
                <span id="green">16x6</span>
                <span id="gray">4x6</span>
            </span>
            <span class="height4">
                <span id="orange">12x4</span>
                <span id="lightBlue">12x4</span>
            </span>
        </span>

        <span id="R">
            <span class="height10">
                <span id="yellow">4x10</span>
            </span>
        </span>
        <router-link to="./second" class="link">跳转至2nd</router-link>
    </div>
</template>

<script>
export default {}
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
    text-align: center;
    vertical-align: middle;
    font-size: 40px;
    line-height: 100%;
    min-width: 1400px;
    min-height: 1000px;
}

div {
    display: inline-block;
}

#L {
    float: left;
    height: 500px;
    width: 1200px;
}

#R {
    float: left;
    height: 500px;
    width: 200px;
}

.height6 {
    line-height: 300px;
}

.height4 {
    line-height: 200px;
}

.height10 {
    line-height: 500px;
}

#blue {
    float: left;
    background-color: rgb(40, 40, 153);
    height: 300px;
    width: 200px;
}

#green {
    float: left;
    background-color: rgb(23, 126, 23);
    height: 300px;
    width: 800px;
}

#gray {
    float: left;
    background-color: rgb(141, 136, 136);
    height: 300px;
    width: 200px;
}

#orange {
    float: left;
    background-color: rgb(236, 108, 58);
    height: 200px;
    width: 600px;
}

#lightBlue {
    float: left;
    background-color: lightblue;
    height: 200px;
    width: 600px;
}

#yellow {
    float: left;
    background-color: rgba(212, 159, 12, 0.986);
    height: 500px;
    width: 200px;
}

.link {
    position: absolute;
    top: 80%;
    left: 20%;
    width: 100px;
    text-decoration: none;
    color: red;
    font-size: large;
    border: 3px solid black;
    border-radius: 50%;
}
</style>