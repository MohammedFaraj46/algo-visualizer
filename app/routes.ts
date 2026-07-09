import {type RouteConfig, index, layout, route} from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("selection-sort", "./routes/sorting/selection-sort.tsx"),
        route("bubble-sort", "./routes/sorting/bubble-sort.tsx"),
        route("merge-sort", "./routes/sorting/merge-sort.tsx"),
        route("quick-sort", "./routes/sorting/quick-sort.tsx"),

        route("linear-search", "./routes/searching/linear-search.tsx"),
        route("binary-search", "./routes/searching/binary-search.tsx"),
        route("binary-search-tree", "./routes/trees/binary-search-tree-page.tsx"),

        route("graph", "./routes/graphs/graph-page.tsx")
    ])
] satisfies RouteConfig;