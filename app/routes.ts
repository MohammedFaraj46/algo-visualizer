import {type RouteConfig, index, layout, route} from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("selection_sort", "./routes/sorting/selection-sort.tsx"),
        route("bubble_sort", "./routes/sorting/bubble-sort.tsx"),
        route("merge_sort", "./routes/sorting/merge-sort.tsx"),
        route("quick_sort", "./routes/sorting/quick-sort.tsx"),

        route("linear_search", "./routes/searching/linear-search.tsx"),
        route("binary_search", "./routes/searching/binary-search.tsx")
    ])
] satisfies RouteConfig;