{
  description = "NodeJS dev shell";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.utils.url = "github:numtide/flake-utils";
  
  outputs = { self, nixpkgs, utils }: 
    utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in 
      {
        devShells.default =  with pkgs; mkShell {
          buildInputs = [
            nodejs
            pnpm
            vtsls
          ];
        };
      }
    );
}
