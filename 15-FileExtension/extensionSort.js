'use strict';

const images = document.getElementById('images');
const videos = document.getElementById('videos');

const files = [
    "pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4",
    "foo.bar"
];

const videoArray = [];

const imageArray = [];

const funcs = {
    sort: (arr) => {
        arr.forEach(key => {
            let ext = key.split('.')[1];
            funcs.sortToArray(key, ext);
        });
    },
    sortToArray: (key, ext) => {
        if (ext === 'jpg') {
            imageArray.push(key);
        } else if (ext === 'gif') {
            imageArray.push(key);
        } else if (ext === 'jpeg') {
            imageArray.push(key);
        } else if (ext === 'png') {
            imageArray.push(key);
        } else if (ext === 'mov') {
            videoArray.push(key);
        } else if (ext === 'avi') {
            videoArray.push(key);
        } else if (ext === 'mpeg') {
            videoArray.push(key);
        } else if (ext === 'mp4') {
            videoArray.push(key);
        } else if (ext === 'mpg') {
            videoArray.push(key);
        } else {
            alert('Unknown file extension :  ' + key + '\nPlease edit and try again.');
        }
    },
    setImages: () => {
        imageArray.forEach(key => {
            let str = '<p>' + key + '</p>';
            images.innerHTML += str;
        });
    },
    setVideos: () => {
        videoArray.forEach(key => {
            let str = '<p>' + key + '</p>';
            videos.innerHTML += str;
        });
    }
}



funcs.sort(files);

funcs.setImages();

funcs.setVideos();