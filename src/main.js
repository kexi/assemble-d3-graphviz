import * as dg from "d3-graphviz";


dg.select("#graph")
  .graphviz()
    .renderDot('digraph {a -> b}');


