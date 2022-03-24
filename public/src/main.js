import * as d3 from "d3-graphviz";


dg.select("#graph")
  .graphviz()
    .renderDot('digraph {a -> b}');


