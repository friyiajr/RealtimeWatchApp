//
//  ContentView.swift
//  SampleWatch Watch App
//
//  Created by Daniel Friyia on 2024-03-28.
//

import SwiftUI

struct ContentView: View {
    let viewModel = ViewModel()
    var body: some View {
        VStack {
            Text("Hello, world!")
          Button("SEND", action: {
            viewModel.sendMessage()
          })
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
