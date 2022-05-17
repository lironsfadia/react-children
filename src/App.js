import logo from "./logo.svg";
import "./App.css";
import { Profiler, Children } from "react";

const playList = [
  {
    link: "https://www.youtube.com/watch?v=5DnhF9nN2HA",
    singer: "Uzi Navon",
    song: "Princess",
    id: 1,
  },
  {
    link: "https://www.youtube.com/watch?v=6TOoD1-7_GY",
    singer: "Comethazine",
    song: "Bands",
    id: 2,
  },
  {
    link: "https://www.youtube.com/watch?v=_bvLphVWHpo",
    singer: "Nicki Minaj",
    song: "Barbie Dreams",
    id: 3,
  },
  {
    link: "https://www.youtube.com/watch?v=q0hyYWKXF0Q",
    singer: "TONES AND I",
    song: "DANCE MONKEY",
    id: 4,
  },
];

const ReactChildrenToArrayMap = ({ children }) => {
  const values = Children.toArray(children).map((x) => {
    {
      console.log("boom");
    }
  });
  console.log(values);
  return values;
};

const ReactChildrenMap = ({ children }) => {
  const values = Children.map(children, (x) => {
    {
      console.log("boom");
    }
  });
  console.log(values);
  return values;
};

const Parent = ({ children }) => {
  console.log(
    Children.map(Children.toArray(children), (child) => {
      return child.key;
    }).join("\n")
  );
  return children;
};

function App() {
  console.log(
    Children.toArray([
      [1, 2],
      [3, [4, [5, [6]]]],
    ])
  ); // length = 6
  return (
    <div className="App">
      <Profiler
        id="Parent"
        onRender={(id, phase, actualDuration) => {
          console.log({ id, phase, actualDuration });
        }}
      >
        <Parent>
          <h1>My Playlist</h1>
          {playList.map((item) => {
            return (
              <a key={"songId_" + item.id} href={item.link}>
                {item.singer} - {item.song}
              </a>
            );
          })}
          <h1>Gur's Playlist</h1>
          {playList.map((item) => {
            return (
              <a key={"songId_" + item.id} href={item.link}>
                {item.singer} - {item.song}
              </a>
            );
          })}
          {playList.map((item) => {
            return (
              <a key={"songId_" + item.id} href={item.link}>
                {item.singer} - {item.song}
              </a>
            );
          })}
        </Parent>
      </Profiler>
      <Profiler
        id="ReactChildrenToArrayMap"
        onRender={(id, phase, actualDuration) => {
          console.log({ id, phase, actualDuration });
        }}
      >
        <ReactChildrenToArrayMap>
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          {undefined}
          {null}
        </ReactChildrenToArrayMap>
      </Profiler>
      <Profiler
        id="ReactChildrenMap"
        onRender={(id, phase, actualDuration) => {
          console.log({ id, phase, actualDuration });
        }}
      >
        <ReactChildrenMap>
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          {undefined}
          {null}
        </ReactChildrenMap>
      </Profiler>
    </div>
  );
}

export default App;
