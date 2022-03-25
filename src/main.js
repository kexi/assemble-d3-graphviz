import * as d3 from "d3-graphviz";


d3.select("#graph")
  .graphviz()
    .dot('digraph {a -> b}')
    .render();