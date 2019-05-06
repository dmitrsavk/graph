import React, { Component, PureComponent } from "react";

const NODE_RADIUS = 30;

const MARGIN = 70;

const NODE_COORDS = {};

class Canvas extends PureComponent {
  queue = [];

  graph = {};

  width = 500;

  height = 500;

  x = 50;

  y = 50;

  ctx = null;

  canvas = null;

  state = {
    width: 500,
    height: 500
  };

  componentDidMount() {
    // const { head, graph } = this.props;

    // this.ctx = this.canvas.getContext("2d");

    // this.drawGraph(head, graph);
  }

  drawGraph(head, graph) {
    const queue = [];

    const visitedNodes = new Set();

    let level = 1;
    let lastItemOnLevel = head;

    const search = node => {
      visitedNodes.add(node);
      queue.shift();

      this.drawNode(node);
      this.right();

      if (graph[node]) {
        graph[node].forEach(item => {
          if (!~queue.indexOf(item)) {
            queue.push(item);
          }
        });
      }

      if (node === lastItemOnLevel) {
        lastItemOnLevel = queue[queue.length - 1];
        level++;
        this.down();
        this.x = 50;
      }

      if (queue.length) {
        search(queue[0]);
      }
    };

    search(head, 1);
  }

  drawNode(node) {
    this.ctx.fillStyle = "#756cf5";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, NODE_RADIUS, 0, 2 * Math.PI, true);
    this.ctx.fill();

    this.drowText(node);
  }

  drowText(node) {
    this.ctx.fillStyle = "#000";
    this.ctx.font = "20px serif";
    this.ctx.fillText(node, this.x - 15, this.y + 5);
  }

  down() {
    this.y += NODE_RADIUS + MARGIN;
  }

  up() {
    this.y -= NODE_RADIUS + MARGIN;
  }

  right() {
    this.x += NODE_RADIUS + MARGIN;
  }

  left() {
    this.x -= NODE_COORDS + MARGIN;
  }

  drawPath() {
    console.log("path");
  }

  getCanvasRef = node => {
    this.canvas = node;
  };

  render() {
    console.log('render graph')
    return (
      // <canvas
      //   id="canvas"
      //   width={this.width}
      //   height={this.height}
      //   ref={this.getCanvasRef}
      // />
      <span>{JSON.stringify(this.props.array)}</span>
    );
  }
}

export default Canvas;
