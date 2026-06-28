
export default class BSTNode {
    value: number;
    left: BSTNode | null;
    right: BSTNode | null;

    constructor(value: number, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    insert(value: number): void {
        if (value < this.value) {
            if (!this.left) {
                this.left = new BSTNode(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (!this.right) {
                this.right = new BSTNode(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    search(value: number): number[] {
        let path: number[] = [];

        path.push(this.value);

        if(this.value == value) {
            return path;
        }

        if (value < this.value) {
            if (!this.left) {
                return [];
            } else {
                const result = this.left.search(value);
                if (result.length == 0) return [];
                path = [...path, ...result];
            }
        } else {
            if (!this.right) {
                return [];
            } else {
                const result = this.right.search(value);
                if (result.length == 0) return [];
                path = [...path, ...result];
            }
        }

        return path;
    }
}