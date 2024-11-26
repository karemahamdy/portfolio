"use client";
import { useEffect } from "react";

const Canvas: React.FC = () => {

  useEffect(() => {
    const background = document.getElementById("bgCanvas") as HTMLCanvasElement;
    const bgCtx = background.getContext("2d");
    const width = window.innerWidth;
    const height = document.body.offsetHeight;

    if (bgCtx) {
      background.width = width;
      background.height = height;

      
      bgCtx.fillStyle = "black";
      bgCtx.fillRect(0, 0, width, height);
      
      bgCtx.fillStyle = "rgba(63, 63, 63, 0.6)";
      for (let x = 0; x < width; x += 20) {
        for (let y = 0; y < height; y += 20) {
          bgCtx.beginPath();
          bgCtx.arc(x, y, 1, 0, Math.PI * 2);
          bgCtx.fill();
        }
      }

      class ShootingStar {
        x: number;
        y: number;
        len: number;
        speed: number;
        size: number;
        waitTime: number;
        active: boolean;

        constructor() {
          this.reset();
        }

        reset() {
          this.x = Math.random() * width;
          this.y = 0;
          this.len = Math.random() * 80 + 10;
          this.speed = Math.random() * 10 + 6;
          this.size = Math.random() * 1 + 0.1;
          this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
          this.active = false;
        }

        update() {
          if (this.active) {
            this.x -= this.speed;
            this.y += this.speed;
            if (this.x < 0 || this.y >= height) {
              this.reset();
            } else {
              bgCtx.lineWidth = this.size;
              bgCtx.beginPath();
              bgCtx.moveTo(this.x, this.y);
              bgCtx.lineTo(this.x + this.len, this.y - this.len);
              bgCtx.stroke();
            }
          } else {
            if (this.waitTime < new Date().getTime()) {
              this.active = true;
            }
          }
        }
      }

      const entities: ShootingStar[] = [];
      for (let i = 0; i < 5; i++) {
        entities.push(new ShootingStar());
      }

      const animate = () => {
      
        bgCtx.fillStyle = "black";
        bgCtx.fillRect(0, 0, width, height); 

      
        bgCtx.fillStyle = "rgba(63, 63, 63, 0.6)";
        for (let x = 0; x < width; x += 20) {
          for (let y = 0; y < height; y += 20) {
            bgCtx.beginPath();
            bgCtx.arc(x, y, 1, 0, Math.PI * 2);
            bgCtx.fill();
          }
        }

      
        bgCtx.strokeStyle = "#A06FC2";
        entities.forEach((entity) => entity.update());

      
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  return (
    <div>
      <canvas id="bgCanvas"></canvas>
    </div>
  );
};

export default Canvas;
