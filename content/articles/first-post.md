---
title: "First Blog Post"
---

# first blog post

### hahaha

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```typescript
// test.ts

const BlogPost: NextPage<PostReturnProps> = ({ frontmatter, content }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      hljs.registerLanguage(
        "typescript",
        () => hljs.getLanguage("typescript") as any
      );
    }
  }, []);
```

Morbi tincidunt augue interdum velit euismod in. Ornare aenean euismod elementum nisi. Quam lacus suspendisse faucibus interdum. Vel pretium lectus quam id leo in vitae turpis massa. Elit sed vulputate mi sit amet mauris commodo. Augue interdum velit euismod in pellentesque massa placerat duis. Amet tellus cras adipiscing enim eu _turpis egestas pretium. Sed sed risus pretium quam vulputate dignissim suspendisse in._ Tellus mauris a diam maecenas. Mauris sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu odio ut sem nulla pharetra. Adipiscing bibendum est ultricies integer.

```java
public class Armstrong {

    public static void main(String[] args) {

        int low = 999, high = 99999;

        for(int number = low + 1; number < high; ++number) {

            if (checkArmstrong(number))
                System.out.print(number + " ");
        }
    }

    public static boolean checkArmstrong(int num) {
        int digits = 0;
        int result = 0;
        int originalNumber = num;

        // number of digits calculation
        while (originalNumber != 0) {
            originalNumber /= 10;
            ++digits;
        }

        originalNumber = num;

        // result contains sum of nth power of its digits
        while (originalNumber != 0) {
            int remainder = originalNumber % 10;
            result += Math.pow(remainder, digits);
            originalNumber /= 10;
        }

        if (result == num)
            return true;

        return false;
    }
}
```
