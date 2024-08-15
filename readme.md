# Minimal Rollup + TypeScript conditional module resolution example

This is a minimal example of how to use Rollup with TypeScript and conditional module resolution.

The conditionally loaded chunks are loaded into the browser(client) on demand. Note there is no common loaded on page load and only one of the two chunks is loaded after the confirm button press.
