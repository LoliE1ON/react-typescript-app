import React from "react";
import {Box, createStyles, Theme, withStyles} from "@material-ui/core";
import {IBlogListProps} from "./interfaces/BlogListProps";

export class BlogListComponent extends React.Component<IBlogListProps> {
    render() {
        const { items } = this.props.blogs;
        return(
            <div>
                <Box fontSize={22} textAlign="center">List</Box>

                { items.map((blog, key) => {
                    return(
                        <div key={key}>
                            {blog.description}
                        </div>
                    )
                })}

            </div>
        );
    }
}

const styles = (theme: Theme) => createStyles({
    field: {
        width: '100%',
        marginTop: 20,
        boxSizing: 'border-box'
    },
});

export const BlogList = withStyles(styles)(BlogListComponent);