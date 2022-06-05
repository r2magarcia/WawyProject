import React from "react";
import { Component } from "react";

export default class DiarioEmociones extends Component {
    formatDatesByWeek(){
        const sortedActivities = this.records.sort((a, b) => b.date - a.date)
    }
  records = [
    { date: () => new Date(), emotion: 1 , day: 1},
    { date: () => new Date().getDate() + 1, emotion: 1 , day: 2},
    { date: () => new Date().getDate() + 2, emotion: 1 , day: 3},
    { date: () => new Date().getDate() + 3, emotion: 1 , day: 4},
    { date: () => new Date().getDate() + 4, emotion: 1 , day: 5},
    { date: () => new Date().getDate() + 5, emotion: 1 , day: 6},
    { date: () => new Date().getDate() + 6, emotion: 1 , day: 7},
    { date: () => new Date().getDate() + 7, emotion: 1 , day: 1},
    { date: () => new Date().getDate() + 8, emotion: 1 , day: 2},
    { date: () => new Date().getDate() + 9, emotion: 1 , day: 3},
    { date: () => new Date().getDate() + 10, emotion: 1 , day: 4},
    { date: () => new Date().getDate() + 11, emotion: 1 , day: 5},
    { date: () => new Date().getDate() + 11, emotion: 1 , day: 6},
    { date: () => new Date().getDate() + 12, emotion: 1 , day: 7},
    { date: () => new Date().getDate() + 13, emotion: 1 , day: 1},
    { date: () => new Date().getDate() + 14, emotion: 1 , day: 2},
    { date: () => new Date().getDate() + 15, emotion: 1 , day: 3},
    { date: () => new Date().getDate() + 16, emotion: 1 , day: 4},
    { date: () => new Date().getDate() + 17, emotion: 1 , day: 5},
  ];

  render(){
    return();
}
}
